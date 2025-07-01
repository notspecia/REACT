import useFormController from "./useFormController";
import './Form.css';



function Form() {

    // hooks collegati al componente Form.tsx
    const { formData, errors, handleChange, handleSubmit } = useFormController();

    return (
        <>
            <h2>Modulo di esempio</h2>
            {/* form con metodo onSumìbmit controllo dei campi */}
            <form onSubmit={handleSubmit} noValidate>
                {/* campo label + input boileplate con gestione errore custom */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text"
                        className={`form-control ${errors?.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors?.name}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors?.email}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Ruolo</label>
                    <select
                        className={`form-select ${errors?.role ? 'is-invalid' : ''}`}
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Seleziona un ruolo</option>
                        <option value="user">Utente</option>
                        <option value="admin">Amministratore</option>
                    </select>
                    <div className="invalid-feedback">{errors?.role}</div>
                </div>

                <div className="form-check mb-3">
                    <input
                        className={`form-check-input ${errors?.terms ? 'is-invalid' : ''}`}
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="terms">
                        Accetto i termini e le condizioni
                    </label>
                    <div className="invalid-feedback">{errors?.terms}</div>
                </div>

                <button type="submit" className="btn btn-primary">Invia</button>
            </form>
        </>
    );
}


export default Form;