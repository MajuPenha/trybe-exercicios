import React from 'react'
import './CreateForm.css'


class CreateForm extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      house: false,
      apt: false,
      summary: '',
      role: '',
      description: ''
    }

  }

  handleChange = ({target}) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [target.name]: value
    })
  }
  render() {
    const { name, email, cpf, address, city, state, house, apt, summary, role, description } = this.state
    return (
      <form>
        <fieldset>

          <label htmlFor='name'>
            Nome:{' '}
            <input type="text" name="name" value={name} required onChange={this.handleChange}></input>
          </label>

          <label htmlFor='email'>
            Email:{' '}
            <input type="text" name="email" value={email}  required="true" onChange={this.handleChange}></input>
          </label>

          <label htmlFor='cpf'>
            CPF:{' '}
            <input type="text" name="cpf" value={cpf} required="true" onChange={this.handleChange}></input>
          </label>
          
            <label htmlFor='address'>
            Endereço:{' '}
            <input type="text" name="address" value={address} required="true" onChange={this.handleChange}></input>
          </label>

          <label htmlFor='city'>
            Cidade:{' '}
            <input type="text" name="city" value={city} required="true" onChange={this.handleChange}></input>
          </label>

          <label htmlFor='state'>
            Estado:{' '}
            <select name="state" value={state} required="true" onChange={this.handleChange}>
              <option value="SP">sp</option>
              <option value="mg">mg</option>

            </select>
          </label>
          <p>Tipo:</p>
          <label htmlFor='housing'>
            <input type="radio" name="housing" value={house} onChange={this.handleChange}></input>
            Casa{' '}
          </label>

          <label htmlFor='house'>
            <input type="radio" name="housing" value={apt} onChange={this.handleChange}></input>
            Apartamento{' '}
          </label>

        </fieldset>

        <fieldset>

          <label htmlFor='summary'>
            Rusumo do currículo:{' '}
            <textarea name="summary" maxLength="1000" value={summary} onChange={this.handleChange}></textarea>
          </label>

          <label htmlFor='role'>
            Cargo:{' '}
            <textarea name="role" maxLength="40" value={role} onChange={this.handleChange}></textarea>
          </label>

          <label htmlFor='description'>
            Descrição do cargo:{' '}
            <textarea name="description" maxLength="500" value={description} onChange={this.handleChange}></textarea>
          </label>

        </fieldset>

        <button onClick={this.handleInfo}>Submit</button>
        <button onClick={this.clean}>Limpar</button>
      </form>
      
    )
  }
}

export default CreateForm;