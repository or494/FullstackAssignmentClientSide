import React from 'react';
import {motion} from 'framer-motion';
import './Queue.css';


function Queue(props) {

    return (
        <div>
            <div className="section-header-container">
                <div className="section-header">Queue</div>
            </div>
            <div className="section-content-container">
                    <table>
                        <tr>
                            <th className="extra-table-column">
                                Enqueued At
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Queue Number
                            </th>
                        </tr>
                        {
                            props.data.map((person) => {
                                return (
                                    <motion.tr layoutId={person.id} key={person.id}>
                                        <td className="extra-table-column">{person.enqueuedAt}</td>
                                        <td>{person.name}</td>
                                        <td>{person.id}</td>
                                    </motion.tr>
                                )
                            })
                        }
                    </table>
            </div>
        </div>
    );
}

export default Queue;   