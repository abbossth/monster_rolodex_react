import { Component } from 'react'

class SearchBox extends Component {
    render() {
        const { onSearchChange,className,placeholder } = this.props
        return (
            <div>
                <input
                    type="search"
                    onChange={onSearchChange}
                    className={className}
                    placeholder={placeholder}
                    />
            </div>
        )
    }
}

export default SearchBox