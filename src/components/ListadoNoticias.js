import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListadoNoticias = ({ noticias }) => (
    <div className="row">
        {noticias.map(noticia => (
            <Noticia
                key={noticias.publishedAt}
                noticia={noticia}
            />
        ))}
    </div>
);

export default ListadoNoticias;

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}