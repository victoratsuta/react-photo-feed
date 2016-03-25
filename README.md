# react-photo-feed
Public photos feed from Flickr, Yandex

Simple app with responsive image grid, columns customizing, one-column view with description, fullscreen preview with 
one click.  Pure CSS for that.
```javascript
<PhotoGrid photos={photos} columns={columns} InformationElement={InfoElement}/>
```
`InformationElement` used for one-column view.

Also you can see toggle|radio button group.
```javascript
<RadioButtonGroup items={sortParams} value={order} onClick={this.onSortClick.bind(this)} type="default"/>
```
## [Demo](http://lkazberova.github.io/react-photo-feed/)

![Preview](http://goo.gl/JVIDu0)


