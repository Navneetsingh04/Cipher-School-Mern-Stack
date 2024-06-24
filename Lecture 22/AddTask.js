const AddTask = () => {
    return (
        <>
            <h3 className="ui heading center">Add New Task</h3>

            <div className="ui form">
            <form>
                <div className="field">
                    <label>Title</label>
                    <input type="text" placeholder="Task Title" name="title"></input>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea rows="2" placeholder="Task Description" name="description"></textarea>
                </div>
                <button class="ui primary button">
                    Submit
                </button>
            </form>
            </div>
        </>
    );
};

export default AddTask;