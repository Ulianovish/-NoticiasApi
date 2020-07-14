import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ setCategoria }) => {

    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencias' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' }
    ];

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuenta Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className={`${styles.btn_block} input-field col s12`}>
                        <input
                            type="submit"
                            className="btn-large amber darken-2"
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}