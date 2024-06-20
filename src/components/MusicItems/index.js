import {BsFillTrashFill} from 'react-icons/bs'

import './index.css'

const MusicItems = props => {
  const {list, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = list

  const onClickDeleteBtn = () => {
    deleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="row-part">
        <div className="music-image-container">
          <img src={imageUrl} alt="track" className=" track-image" />

          <div className="text">
            <p className="head">{name}</p>
            <p className="para-list">{genre}</p>
          </div>
        </div>

        <div className="time-delete-container">
          <p className="head">{duration}</p>

          <button
            type="button"
            className="delete-btn"
            onClick={onClickDeleteBtn}
            data-testid="delete"
          >
            <BsFillTrashFill className="delete" size={20} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItems
