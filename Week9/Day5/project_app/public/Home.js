import React from 'react';
import blog from 'blog.png';
import { render } from '@testing-library/react';

const tWord = <title>hello</title>
const pWord = <p>hi</p>

function About(props) {
    return <title>Title {props.title}</title>,
    <p>Hi my name is Dean and I enjoy coding</p>
}

