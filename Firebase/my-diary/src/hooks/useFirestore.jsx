import { appFireStore, timeStamp } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useReducer } from "react";

// document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환합니다.
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false,
};

// 전달 받는 action에 따른 state 업데이트를 위한 함수입니다.
const storeReducer = (state, action) => {
    switch (action.type) {
        case "isPending":
            return {
                isPending: true,
                document: null,
                error: null,
                success: false,
            };
        case "addDoc":
            return {
                isPending: false,
                document: action.payload,
                error: null,
                success: true,
            };
        case "error":
            return {
                isPending: false,
                document: null,
                error: action.payload,
                success: false,
            };
        default:
            return state;
    }
};

// 우리가 데이터를 저장할 컬랙션의 이름을 인자로 합니다.
export const useFirestore = (transaction) => {
    const [response, dispatch] = useReducer(storeReducer, initState);

    // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬렉션을 만들지는 않았지만,
    // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해줍니다.
    const colRef = collection(appFireStore, transaction);

    const addDocument = async (doc) => {
        dispatch({ type: "isPending" });
        try {
            const createdTime = timeStamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: "addDoc", payload: docRef });
        } catch (e) {
            dispatch({ type: "error", payload: e.message });
        }
    };

    // 컬렉션에서 문서를 제거합니다.
    const deleteDocument = (id) => {};

    return { addDocument, deleteDocument, response };
};
