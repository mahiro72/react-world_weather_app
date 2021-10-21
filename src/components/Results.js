// Results.js

const Results =(props)=>{
    return(
        <div>
            {props.results.cityName && <div>{props.results.cityName}</div>}
            {props.results.country && <div>{props.results.country}</div>}
            {props.results.tempareture && <div>{props.results.tempareture}<span>℃</span></div>}
            {props.results.conditionText && <div>
                <img src={props.results.icon}alt='icon' />
                    <span>
                        {props.results.conditionText}
                    </span>
                </div>}

        </div>

    );
};


export default Results;