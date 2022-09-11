import './ItemDetail.css'

const ItemDetail = ({detail}) => {
  return (
    <div className="detail-card">
        <img src={detail.img}/>
        <detail className="detail-info">
            <h2>{detail.title}</h2>
            <h3>{detail.price}</h3>
            <p>{detail.description}</p>
            <ul className='tracklist'>{detail.tracks}</ul>
        </detail>
    </div>
  )
}

export default ItemDetail;