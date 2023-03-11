import { useDispatch, useSelector } from "react-redux"
import EditGame from "./EditGame/EditGame";
import EditPlaystyle from "./EditPlaystyle.jsx/EditPlaystyle";
import EditTime from "./EditTime/EditTime";


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
        <div>
            <EditTime/>
        </div> 
        </>
    )
}

export default EditForm