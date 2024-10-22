---
layout: layout.webc
---
# On Mark's Ups and Downs
### 22nd of October 2024

``` mdx
![Picture A](a.png)
This is only a test 
of the emergency broadcast system

![Picture B](b.png)
This is the product of 
hysterical mass confusion

![Picture C](c.png)
A ship of fools adrift 
on the wings of our pollution
```

::: example
![A](a.png)
This is only a test
of the emergency broadcast system

![B](b.png)
This is the product of
hysterical mass confusion

![C](c.png)
A ship of fools adrift 
on the wings of our pollution

Rudderless and powerless in the sea of our delusion..
:::

___

## Eleventy will save us!

<photo-album>![A](a.png) ![B](b.png) ![C](c.png)</photo-album>

### Just two pictures side by side

<photo-album>![D](d.png) ![E](e.png)</photo-album>

[View source code](https://github.com/bloomingbridges/webc-album/blob/473ad122fa60ca2848e78e16fe2782646df43828/_components/photo-album.webc)

___

## markdown-it Container Plugin Version

``` mdx
::: strip
![A](a.png)
![B](b.png)
![C](c.png)
:::
```

:::: example
::: strip
![A](a.png)
![B](b.png)
![C](c.png)
:::
::::

``` mdx
::: strip
![D](d.png)
![E](e.png)
:::
```

:::: example
::: strip
![D](d.png)
![E](e.png)
:::
::::

___

## Bringing back captions with &lt;figure&gt;

``` mdx
::: strip
![Picture A](a.png)
                         ?! Somehow the plugin only triggers
![Picture B](b.png)
                            when each image is on a separate
![Picture C](c.png)
                            line
![Picture D](d.png)

![Picture E](e.png "A more elaborate caption")
:::
```

:::: example
::: strip
![Picture A](a.png)

![Picture B](b.png)

![Picture C](c.png)

![Picture D](d.png)

![Picture E](e.png "A more elaborate caption")
:::
::::

___

## &lt;table&gt; will love you forever!

The table syntax introduced by GFM (GitHub flavoured Markdown) provide, in my opinion, the most intuitive solution to our problem. The only downside being the lack of responsiveness.

``` mdx
| ![1](1.png) | ![2](2.png) | ![3](3.png) |
|-------------|-------------|-------------|
| Picture 1   | Picture 2   | Picture 3   |
```

|![1](1.png)|![2](2.png)|![3](3.png)|
|-----------|-----------|-----------|
| Picture 1 | Picture 2 | Picture 3 |

``` mdx
| ![1](1.png) | ![2](2.png) | ![3](3.png) | ![4](4.png) | ![5](5.png) |
|-------------|-------------|-------------|-------------|-------------|
| Picture 1   | Picture 2   | Picture 3   | Picture 4   | Picture 5   |
```

|![1](1.png)|![2](2.png)|![3](3.png)|![4](4.png)|![5](5.png)|
|-----------|-----------|-----------|-----------|-----------|
| Picture 1 | Picture 2 | Picture 3 | Picture 4 | Picture 5 |

``` mdx
| ![1](1.png) | ![2](2.png) |     What's this? Turns out this row of hyphens isn't 
|-------------|-------------| !?  in fact denoting the borders between rows, it
| Picture 1   | Picture 2   |     marks the end of the required table header!
| ![3](3.png) | ![4](4.png) |     No problem for a single strip of images, but
| Picture 3   | Picture 4   |     counter-intuitive when going for a 2x2 grid.
```

___

## Conclusion