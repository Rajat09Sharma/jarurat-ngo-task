import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";


export default function NewUserPage() {
    const navigate = useNavigate();
    function handleClose() {
        navigate("../")
    }
    return (
        <Modal onClose={handleClose}>
            <div className="form-actions">
                <button className="" onClick={handleClose}>Cancle</button>
                <button className="btn btn-color">Cancle</button>
            </div>
        </Modal>
    )
}
