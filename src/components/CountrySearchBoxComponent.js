import React from 'react'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'


class CountrySearchBoxComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {address: 'Stockholm'}
        this.onChange = (address) => this.setState({address})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        return (
            <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete inputProps={inputProps}/>
                <button className="btn-primary btn" type="submit">Add +</button>
            </form>
        )
    }

}

export default CountrySearchBoxComponent


