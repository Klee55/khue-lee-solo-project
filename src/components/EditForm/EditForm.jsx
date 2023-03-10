import { useDispatch, useSelector } from "react-redux"
import EditGame from "./EditGame/EditGame";
import EditPlaystyle from "./EditPlaystyle.jsx/EditPlaystyle";


const EditForm = () => {
    const dispatch = useDispatch();
    const games = useSelector((store) => store.fetchGamesReducer);
    const playstyles = useSelector((store) => store.fetchPlaystylesReducer)

    console.log('games:', games);
    console.log('playstyles:', playstyles);

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