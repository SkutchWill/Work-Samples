import React from 'react';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}

function PaletteList(props) {

    const { palettes, classes } = props;
    let navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/palette/${id}`);
    }

    const miniPalettes = palettes.map(palette => (
        <MiniPalette {...palette} handleClick={() => handleClick(palette.id)}/>
    ));
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                    {miniPalettes}
                </div>
            </div>            
        </div>
    );
}

export default withStyles(styles)(PaletteList);