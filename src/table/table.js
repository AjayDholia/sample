import './table.css'

const Table = ({name,link,state}) => {
    return <tr >
            <td>{name}</td>
            <td>{state}</td>
            <td><a href={`${link}`}>click to visit</a></td>
        </tr>
    
};

export default Table;