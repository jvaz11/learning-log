import React from 'react'
import { battle } from '../utils/api'

export default class Results extends React.Component {
    componentDidMount() {
        const { playerOne, playerTwo } = this.props // we get these from where the <Results> component is invoked in Battle.js

        battle([playerOne, playerTwo])
            .then((players) => {
                console.log('data: ', players)
            })
    }

    render() {
        return (
            <div>
                Results
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        )
    }
}