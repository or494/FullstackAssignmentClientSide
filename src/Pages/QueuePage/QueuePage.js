import React, { useEffect, useState } from 'react';
import './QueuePage.css';
import Enqueue from './PageComponents/Enqueue/Enqueue';
import Queue from './PageComponents/Queue/Queue';
import Current from './PageComponents/Current/Current';
import axios from 'axios';
import appConfig from '../../appConfig';
import {AnimateSharedLayout, AnimatePresence} from 'framer-motion';

function QueuePage(props) {
    const [data, setData] = useState({queue: [], current: null});

    const GetData = async() => {
        const result = await axios.get(appConfig.serverUrl + '/get');
        setData(result.data);
    }

    useEffect(GetData, []);

    const enqueueFunction = async(name) => {
        const result = await axios.post(appConfig.serverUrl + '/enqueue', {name});
        setData(result.data);
        console.log(result.data);
    }

    const dequeueFunction = async() => {
        const result = await axios.post(appConfig.serverUrl + '/dequeue');
        setData(result.data);
    }

    return ( 
        <div>
            <AnimateSharedLayout>
                <Enqueue onEnqueue={enqueueFunction}></Enqueue>
                <Queue data={data.queue}></Queue>
                <Current data={data.current} onDequeue={dequeueFunction}></Current>
            </AnimateSharedLayout>
        </div>
    );
}

export default QueuePage;