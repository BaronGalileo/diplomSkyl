import { useDispatch, useSelector } from "react-redux";
import { removeAuth } from "../../store/authSlice";
import { removeServices } from "../../store/servicesSlice";
import { removeReclamation } from "../../store/reclamationSlice";
import { Navigate } from "react-router-dom";


export const ExaminationExpires = () => {

    const expireAuth = useSelector(state => state.auth);

    const expireServices = useSelector(state => state.services);

    const expireReclamation = useSelector(state => state.reclamation);

    const dispatch = useDispatch();

    const expireTimeServices = expireServices.expire ? expireServices.expire : null;
    
    const expireTimeReclamation = expireServices.expire ? expireServices.expire : null;

    const expireTimeAuth = expireAuth.expire ? expireAuth.expire : null;

    const timeNew = new Date().getTime()

    if(expireTimeAuth && expireTimeAuth < timeNew) {
        dispatch(removeAuth())
        alert("Пожалуйста, авторизуйтесь!")
    }

    // if(expireTimeServices && expireTimeServices < timeNew) {
    //     dispatch(removeServices())
    // }

    // if(expireTimeReclamation && expireTimeReclamation < timeNew) {
    //     dispatch(removeReclamation())
    // }
}