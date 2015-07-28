React Components
================

A collection of reusable React components (ES2015 edition).

Gravatar
--------

```javascript
React.render(
  <Gravatar email='test@example.com' />,
  document.body
;)
```

Image
-----

```javascript
React.render(
  <Image
    src='image.jpg'
    alt='Image!'
    width='200'
    height='200'
    className='thumb' />,
  document.body
;)
```

Share
-----

```javascript
React.render(
  <Share
    text='This is some text that will be shared!'
    url='http://www.example.com' />,
  document.body
);
```
