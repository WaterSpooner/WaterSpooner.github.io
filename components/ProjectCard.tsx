import { useState } from 'react'
import projectCardInterface from '../interfaces/projectCardInterface';
import {Tag} from '../components/Tag'
import {Transition} from '@headlessui/react'

export function ProjectCard(props: projectCardInterface) {
    const { title, description, tags,link} = props;

    return (
        link ?
        (
        <div className = "font-yanone-kaffeesatz flex flex-col w-4/5 back bg-zinc-700 rounded-2xl p-3 mb-8 hover:drop-shadow-2xl hover:duration-500 animate-fade-down">
            <a href={link} >
            <b className=' text-white text-4xl pb-2'>{title}</b>
            <hr className = " border-2 rounded-2xl mt-2"></hr>
            <p className = "pt-2 text-gray-200">{description}</p>
            <div className = "flex flex-row flex-wrap text-gray-200">
                {tags.map(tag => (<Tag key = {tag}>{tag}</Tag>))}
            </div>
            </a>
        </div>
        )
        :
        (        
        <div className = "font-yanone-kaffeesatz flex flex-col w-4/5 back bg-zinc-700 rounded-2xl p-3 mb-8 hover:drop-shadow-2xl hover:duration-500 animate-fade-down">
            <b className=' text-white text-4xl pb-2'>{title}</b>
            <hr className = " border-2 rounded-2xl mt-2"></hr>
            <p className = "pt-2 text-gray-200">{description}</p>
            <div className = "flex flex-row flex-wrap text-gray-200">
                {tags.map(tag => (<Tag key = {tag}>{tag}</Tag>))}
            </div>
        </div>
        )
    );
  }