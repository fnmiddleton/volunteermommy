import React from 'react'
import './style.css'


class SelectGrade extends React.Component  {
    state = {
        ...this.props,
        items: this.props.items || [],
        // selectedItem: this.props.items[0] || this.props.selectedItem,
        selectedItem: this.props.items && this.props.items[0],
        showItems: false
    }

    dropDown = () => {
        this.setState(prevState => ({showItems: !prevState.showItems }))
    }

    selectItem = (item) => {
        this.setState({selectedItem: item, showItems: false,})
    }

    render() {
        return <div>
            <div className="select-box--box" style={{width: this.state.width || 180}}>
                <div className="select-box--container">
                    <div className="select-box--selected-item">{this.state.selectedItem.value}</div>
                    <div className="select-box--arrow" onClick={this.dropDown}>
                    <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} /></div>
                </div>
                <div className="select-box--items" style={{ display: this.state.showItems ? 'block' : 'none' }}>
                    {this.state.items.map(item => 
                        <div key={item.id} onClick={() => this.selectItem(item)}
                            className={this.state.selectedItem === item ? 'selected' : ''}>
                            {item.value}
                        </div>
                    )}
                </div>
            </div>
            <input type="hidden" name={this.state.name} value={this.state.items && this.state.selectedItem.id } />
        </div>
    }
}

export default SelectGrade