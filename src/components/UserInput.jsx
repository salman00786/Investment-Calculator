export default function UserInput(){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input id="user-input" type="number" required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input id="user-input" type="number" required/>
                </p>
                </div>
                <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input id="user-input" type="number" required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input id="user-input" type="number" required />
                </p>
                </div>
            
        </section>
    )
}