// Form.js

const Form=(props)=>{

    return(
        <form>
            <input type='text' name='city' placeholder='都市名' onChange={e=>props.setCity(e.target.value)}/>
            <button type='submit' onClick={props.getWeather}>Get Weather</button>

        </form>
    );

};

export default Form;

// 225af1cab6d04ff0835185655212110

