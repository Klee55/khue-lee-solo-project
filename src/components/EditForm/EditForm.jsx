import { useDispatch, useSelector } from "react-redux"
import EditGame from "./EditGame/EditGame";
import EditPlaystyle from "./EditPlaystyle.jsx/EditPlaystyle";


const EditForm = () => {

    return (
        <>
        <h1>Edit Page</h1>
        <div>
            <EditGame />
        </div>
        <div>
            <EditPlaystyle />
        </div>
            
        </>
    )
}

export default EditForm