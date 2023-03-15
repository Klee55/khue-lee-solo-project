import EditGame from "./EditGame/EditGame";
import EditPlaystyle from "./EditPlaystyle.jsx/EditPlaystyle";
import EditTime from "./EditTime/EditTime";
import EditUserAbout from "./EditUserAbout/EditUserAbout";
import { useHistory } from 'react-router-dom';


const EditForm = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Edit Page</h1>
            <div>
                <EditUserAbout />
            </div>
            <div>
                <EditGame />
            </div>
            <div>
                <EditPlaystyle />
            </div>
            <div>
                <EditTime />
            </div>
            <button onClick={() => history.push('/profile')}>
                Done
            </button>
        </div>
    )
}

export default EditForm