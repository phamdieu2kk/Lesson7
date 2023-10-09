export default function LogicTask(props) {
    const renderTasks = (filterType) => {
        return props.data.map((taskItem) => {
            const isActive = taskItem.status;
            if (filterType === "all" || (filterType === "active" && isActive) || (filterType === "complete" && !isActive)) {
                const style = isActive
                    ? { backgroundColor: '#E1C1AC', padding: '10px', margin: '10px 0' }
                    : { backgroundColor: '#352323', padding: '10px', margin: '10px 0', color: 'white' };

                return (
                    <div key={taskItem.id} style={style} className='d-flex justify-content-between'>
                        <span>
                            <input 
                                name={taskItem.id} 
                                onChange={props.changeTask} 
                                checked={!isActive} 
                                type='checkbox' 
                            />
                            {taskItem.taskName}
                        </span>
                        <button onClick={() => { props.deleteTask(taskItem.id) }}>Delete</button>
                    </div>
                );
            }

            return null;
        });
    }

    return (
        <div className='pt-3'>
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Active</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Complete</button>
                    </li>
                    <li className="nav-item" role="presentation">
                          <button onClick={()=>{props.addToCart()}} className="nav-link">Add to cart </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">{renderTasks("all")}</div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">{renderTasks("active")}</div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab">{renderTasks("complete")}</div>
                    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab">...</div>
                </div>
            </div>
        </div>
    )
}
