import classes from './Sevas.module.css'
import SevasHeader from './SevasHeader/SevasHeader';


const Sevas = () => {
    return(<>
    <div className={classes.savamaincomponent}>
        <SevasHeader/>
        <h1>Sevas</h1>
    </div>
    </>)
}

export default Sevas;