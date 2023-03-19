import EditGame from "./EditGame/EditGame";
import EditPlaystyle from "./EditPlaystyle.jsx/EditPlaystyle";
import EditTime from "./EditTime/EditTime";
import EditUserAbout from "./EditUserAbout/EditUserAbout";
import { useHistory } from 'react-router-dom';
import './EditForm.css';


const EditForm = () => {
    const history = useHistory();

    return (
        <div className="editPage">
            <div className="edit">
                <div>
                    <EditUserAbout />
                </div>
                <br />
                <div>
                    <EditGame />
                </div>
                <br />
                <div>
                    <EditPlaystyle />
                </div>
                <br />
                <div>
                    <EditTime />
                </div>
                <br />
                <button 
                    className="profileButton"
                    onClick={() => history.push('/profile')}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default EditForm