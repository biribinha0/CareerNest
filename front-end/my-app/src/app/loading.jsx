import React from 'react';

const Loader = () => {
    return (
        <div className="spinnerContainer">
            <div className="spinner" />
            <div className="loader">
                <p>carregando</p>
                <div className="words">
                    <span className="word">vagas</span>
                    <span className="word">empresas</span>
                    <span className="word">candidatos</span>
                    <span className="word">estágios</span>
                    <span className="word">vagas</span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
