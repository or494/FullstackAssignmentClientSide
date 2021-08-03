import { motion } from 'framer-motion';
import React from 'react';

function Current(props) {
    return (
        <div>
            <div className="section-header-container">
                <div className="section-header">Queue</div>
            </div>
            <div className="section-content-container">
                {   props.data ?        
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
                        <motion.tr>
                            <td className="extra-table-column">{props.data.enqueuedAt}</td>
                            <td>{props.data.name}</td>
                            <td>{props.data.id}</td>
                        </motion.tr>
                    </table>
                    :
                    <div>There's none currently</div>
                }   
                
            </div>
            <div className="section-content-container">
                <button onClick={props.onDequeue}>Call next</button>
            </div>
        </div>
    );
}

export default Current;