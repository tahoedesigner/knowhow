## 安桌各版本使用率

https://developer.android.com/about/dashboards/index.html

## 案卓屏幕大体划分

* 大小：small, normal, large, xlarge
* 密度：low (ldpi), medium (mdpi), high (hdpi), extra high (xhdpi)

布局例子：

* layout/              # default (portrait)
* layout-land/         # landscape
* layout-large/        # large (portrait)
* layout-large-land/   # large landscape

图片例子：

* drawable-xhdpi: 2.0倍
* drawable-hdpi: 1.5倍
* drawable-mdpi: 1.0(标准图片大小)
* drawable-ldpi: 0.75倍

### 小技巧

#### 获取文字资源的方法

```java
String hello = getResources().getString(R.string.hello_world);
```

#### 检测系统版本号

```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB) {
}
```

#### 支持库

https://developer.android.com/topic/libraries/support-library/index.html

#### AndroidManifest.xml式样

https://developer.android.com/guide/topics/manifest/manifest-intro.html

#### 样式与主题

https://developer.android.com/guide/topics/ui/themes.html

#### 系统简单数据保存

https://developer.android.com/training/data-storage/shared-preferences.html

#### 提供资源

https://developer.android.com/guide/topics/resources/providing-resources.html

#### Realm

面向对象的数据库系统

https://realm.io/cn/

