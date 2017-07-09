# react-photo-feed
Public photos feed from Flickr, Yandex

Simple example with responsive image grid, columns customizing, one-column view with description, fullscreen preview with 
one click.  Pure CSS for that.


## Installation
You can use PhotoGrid in your app, just install it from npm

`npm install react-photo-feed`

## Usage
```javascript
<PhotoGrid photos={photos} columns={columns} InformationElement={InfoElement}/>
```
### Prop Types
| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| photos | Array | ✓ | Array of objects, like `[{id: 1, src: 'http://url_to_small_image', bigSrc: 'http://url_to_big_image', title: 'Caption of photo'}]` |
| columns | Number |  | Grid columns, like `columns={1}`, also can be 2,3,5 |
| InformationElement | Function |  | Component used for one-column view |



Also you can see toggle|radio button group.
```javascript
<RadioButtonGroup items={sortParams} value={order} onClick={this.onSortClick.bind(this)} type="default"/>
```
## [Demo](http://lkazberova.github.io/react-photo-feed/)

![Preview](https://s31.postimg.org/e2eejik3v/Untitled_GIF.gif)

Some ideas were inspired by [react-rpg](https://github.com/James-Oldfield/react-rpg)
