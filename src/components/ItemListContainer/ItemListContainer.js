import './styles.css'

const ItemListContainer = ({greeting}) => {
    return (
        <section className='welcome-container'>
            <h2>{greeting}</h2>
        </section>
    )
}

export default ItemListContainer;