import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

export default function MenuHeader() {

    const { categories } = useSelector(store => store.category)

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li key={cat.name}>
                    {
                        cat.parentId ? <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a> :<span>{cat.name}</span>
                    }
                    {cat.children.length > 0 ? (<ul>{renderCategories(cat.children)}</ul>) : <span style={{padding:0,margin:0}}></span>}
                </li>)
        }
        
        return myCategories;
    }

    return (
        <div className="menuHeader" >
            <ul>
            {
                renderCategories(categories)
            }
            </ul>
        </div>
    )
}
