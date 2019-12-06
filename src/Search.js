import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, Input, Button, DropdownToggle, DropdownMenu, DropdownItem, InputGroupButtonDropdown} from 'reactstrap';
import Select from 'react-select'



class Search extends Component {
  state = {
    similarToDropDownOpen: false,
    similarToDropDownValue: "Similar To",
    similarToSearch: "",
    findDropDownOpen: false,
    findDropDownValue: "Find",
    discoverTypeDropDownOpen: false,
    typeDropDownValue: "Type",
    ratingDropDownOpen: false,
    viewerRatingDropDownValue: "Viewer Rating",
    genreDropDownOpen: false,
    selectedGenreOptions: [],
    yearDropDownOpen: false,
    runtimeDropDownOpen: false,

    options: [
    {label: 'Action', value: '2'},
    {label: "Action & Adventure", value: "10759"},
    {label: "Adventure", value: "12"},
    {label: "Animation", value: "16"},
    {label: "Comedy", value: "35"},
    {label: "Crime", value: "80"},
    {label: "Documentary", value: "99"},
    {label: "Drama", value: "18"},
    {label: "Family", value: "10751"},
    {label: "Fantasy", value: "14"},
    {label: "History", value: "36"},
    {label: "Horror", value: "27"},
    {label: "Kids", value: "10762"},
    {label: "Music", value: "10402"},
    {label: "Mystery", value: "9648"},
    {label: "News", value: "10763"},
    {label: "Reality", value: "10764"},
    {label: "Romance", value: "10749"},
    {label: "Sci Fi", value: "878"},
    {label: "Sci Fi & Fantasy", value: "10765"},
    {label: "Soap", value: "10766"},
    {label: "Talk", value: "10767"},
    {label: "TV Movie", value: "10770"},
    {label: "Thriller", value: "53"},
    {label: "War", value: "10752"},
    {label: "Western", value: "37"},
    {label: "War & Politics", value: "10768"}
  ],
  };

  toggleSimilarToDropDown = event => {
    this.setState({
      similarToDropDownOpen: !this.state.similarToDropDownOpen
    });
  }

  toggleFindDropDown = event => {
    this.setState({
      findDropDownOpen: !this.state.findDropDownOpen
    });
  }

  toggleDiscoverTypeDropDown = event => {
    this.setState({
      discoverTypeDropDownOpen: !this.state.discoverTypeDropDownOpen
    });
  }

  toggleGenreDropDown = event => {
    this.setState({
      genreDropDownOpen: !this.state.genreDropDownOpen
    });
  }

  toggleYearDropDown = event => {
    this.setState({
      yearDropDownOpen: !this.state.yearDropDownOpen
    });
  }

  toggleRuntimeDropDown = event => {
    this.setState({
      runtimeDropDownOpen: !this.state.runtimeDropDownOpen
    });
  }

  toggleRatingDropDown = event => {
    this.setState({
      ratingDropDownOpen: !this.state.ratingDropDownOpen
    });
  }

  handleTitleSearch = event => {
    this.setState({
      titleSearch: event.target.value
    })
  }

  similarToSearch = event => {
    var contentTitle = this.state.similarToSearch.split(" ").join("%20")
    console.log(contentTitle);
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=46cfaed238765e6cdc4684e4da62da88&language=en-US&query=${contentTitle}&page=1&include_adult=false`, {
      method: "GET"
    }).then(res => res.json())
    .then(title => console.log(title))
  }

  similarToChangeValue = e => {
  this.setState({similarToDropDownValue: e.currentTarget.textContent})
}

findChangeValue = e => {
this.setState({findDropDownValue: e.currentTarget.textContent})
}

typeChangeValue = e => {
this.setState({typeDropDownValue: e.currentTarget.textContent})
}

viewerRatingChangeValue = e => {
this.setState({viewerRatingDropDownValue: e.currentTarget.textContent})
}


handleMultiChange = option => {
    this.setState({
        selectedGenreOptions: option}
    )}
  render() {
    return (
      <div>
      <InputGroup>
      <InputGroupButtonDropdown addonType="append" isOpen={this.state.similarToDropDownOpen} toggle={this.toggleSimilarToDropDown}>
        <DropdownToggle caret>
          {this.state.similarToDropDownValue}
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem><div onClick={this.similarToChangeValue}>Similar To </div></DropdownItem>
          <DropdownItem><div onClick={this.similarToChangeValue}>Movie </div></DropdownItem>
          <DropdownItem><div onClick={this.similarToChangeValue}>TV Show </div></DropdownItem>
        </DropdownMenu>
      </InputGroupButtonDropdown>
   <Input />
   <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
 </InputGroup>
 <br></br>
 <InputGroup>
 <InputGroupButtonDropdown addonType="append" isOpen={this.state.findDropDownOpen} toggle={this.toggleFindDropDown}>
   <DropdownToggle caret>
     {this.state.findDropDownValue}
   </DropdownToggle>
   <DropdownMenu>
   <DropdownItem><div onClick={this.findChangeValue}>Find </div></DropdownItem>
    <DropdownItem><div onClick={this.findChangeValue}>Actor </div></DropdownItem>
     <DropdownItem><div onClick={this.findChangeValue}>Movie </div></DropdownItem>
     <DropdownItem><div onClick={this.findChangeValue}>TV Show </div></DropdownItem>
   </DropdownMenu>
 </InputGroupButtonDropdown>
<Input />
<InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
</InputGroup>
<br></br>
<InputGroup>
 <InputGroupButtonDropdown addonType="append" isOpen={this.state.discoverTypeDropDownOpen} toggle={this.toggleDiscoverTypeDropDown}>
   <DropdownToggle caret>
     {this.state.typeDropDownValue}
   </DropdownToggle>
   <DropdownMenu>
   <DropdownItem><div onClick={this.typeChangeValue}>Type </div></DropdownItem>
     <DropdownItem><div onClick={this.typeChangeValue}>Movie </div></DropdownItem>
     <DropdownItem><div onClick={this.typeChangeValue}>TV Show </div></DropdownItem>
   </DropdownMenu>
 </InputGroupButtonDropdown>
 <InputGroupButtonDropdown addonType="append" isOpen={this.state.genreDropDownOpen} toggle={this.toggleGenreDropDown}>
   <DropdownToggle caret>
     Genre
   </DropdownToggle>
   <DropdownMenu>
     <Select options={this.state.options} isMulti defaultValue={this.state.selectedGenreOptions} onChange={this.handleMultiChange}/>
   </DropdownMenu>
 </InputGroupButtonDropdown>
 <InputGroupButtonDropdown addonType="append" isOpen={this.state.yearDropDownOpen} toggle={this.toggleYearDropDown}>
   <DropdownToggle caret>
     Year
   </DropdownToggle>
   <DropdownMenu>
   <DropdownItem>Oldest</DropdownItem>
   <input type="date"></input>
   <DropdownItem>Newest</DropdownItem>
   <input type="date"></input>
   </DropdownMenu>
 </InputGroupButtonDropdown>
 <InputGroupButtonDropdown addonType="append" isOpen={this.state.runtimeDropDownOpen} toggle={this.toggleRuntimeDropDown}>
   <DropdownToggle caret>
     Runtime
   </DropdownToggle>
   <DropdownMenu>
   <DropdownItem>Oldest</DropdownItem>
   <input type="date"></input>
   <DropdownItem>Newest</DropdownItem>
   <input type="date"></input>
   </DropdownMenu>
 </InputGroupButtonDropdown>
 <InputGroupButtonDropdown addonType="append" isOpen={this.state.ratingDropDownOpen} toggle={this.toggleRatingDropDown}>
   <DropdownToggle caret>
     {this.state.viewerRatingDropDownValue}
   </DropdownToggle>
   <DropdownMenu>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>Viewer Rating</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>0</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>1</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>2</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>3</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>4</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>5</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>6</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>7</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>8</div></DropdownItem>
   <DropdownItem><div onClick={this.viewerRatingChangeValue}>>9</div></DropdownItem>
   </DropdownMenu>
 </InputGroupButtonDropdown>
 <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
</InputGroup>
      </div>
    )
  }
}

export default Search;
