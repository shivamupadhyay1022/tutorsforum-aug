import React from 'react'
import Tutorcard from './Tutorcard'

function Autocarousel() {
  return (
    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    className="w-full my-3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
<div className="w-full inline-flex flex-nowrap">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <Tutorcard/>
        </li>
        <li>
            <Tutorcard/>
        </li>
        <li>
            <Tutorcard/>
        </li>
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <Tutorcard/>
        </li>
        <li>
            <Tutorcard/>
        </li>
        <li>
            <Tutorcard/>
        </li>
    </ul>
</div>                
</div>
  )
}

export default Autocarousel