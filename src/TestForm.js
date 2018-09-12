import React, { Component } from 'react';
import './TestForm.css'

class TestForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            inputstr: '',
            conjstr: '',
            multistr: '',
            sum: 0
        }

        this.state = this.initialState;
    }
    handleChange = event => {
        const {name, value} = event.target;

        this.setState( this.initialState);


        let arr,  sum = 0, conjstr = '', multistr ='', itemp = 0, i = 1;

        arr = this.state.inputstr.split(' ');
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].length !== 0 && !isNaN(arr[i]) && parseInt(arr[i], 10) > 0)
                sum += parseInt(arr[i], 10);
        }

        itemp = sum;
        while (i < itemp) {
            conjstr += i + ' + ';
            itemp -= i++;
        }
        conjstr += i;

        itemp = sum;
        i = 2;
        while (itemp > i)
        {
            if (itemp % i === 0)
            {
                multistr += i + ' * ';
                itemp /= i;
                i = 2;
            }
            else
                i++;
        }
        multistr += i;

        this.setState({
            [name] : value,
            multistr: multistr,
            conjstr: conjstr,
            sum: sum,

        });
    }


    render() {
        const { inputstr, conjstr, multistr, sum } = this.state;

        return (
            <div className="TestForm">
                <h2>Insert positive numbers devided by space and press the button</h2>
                    <div>
                    <input
                        type="text"
                        name="inputstr"
                        value={inputstr}
                        onChange={ this.handleChange.bind(this)}
                    />
                        <br/>
                        {sum > 0 && <div >{sum}</div> }
                        {sum > 0 && <div >{sum} = {conjstr}</div> }
                        {sum > 0 && <div >{sum} = {multistr}</div> }
                </div>
            </div>

        );
    }
}

export default TestForm;
