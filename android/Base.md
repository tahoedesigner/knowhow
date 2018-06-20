Android开发资源
===============

## Android开发者

https://developer.android.com/docs/

https://developer.android.com/develop/index.html

## 官方博客

https://android-developers.googleblog.com

## Android Studio

https://developer.android.com/studio/index.html

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

* drawable-xxxhdpi: 4.0倍
* drawable-xxhdpi:  3.0倍
* drawable-xhdpi:   2.0倍
* drawable-hdpi:    1.5倍
* drawable-mdpi:    1.0(标准图片大小,160dpi基准)
* drawable-ldpi:    0.75倍
* nodpi:  它可用于您不希望缩放以匹配设备密度的位图资源。
* tvdpi:  密度介于 mdpi 和 hdpi 之间的屏幕；约为 213dpi。它并不是“主要”密度组， 主要用于电视，而大多数应用都不需要它。对于大多数应用而言，提供 mdpi 和 hdpi 资源便已足够，系统将根据需要对其进行缩放。
* anydpi: 此限定符适合所有屏幕密度，其优先级高于其他限定符。 这对于矢量可绘制对象很有用。

https://developer.android.com/guide/topics/resources/providing-resources.html#ResourceTypes

### 支持多种屏幕

https://developer.android.com/guide/practices/screens_support.html

```java
//取得密度
private void getDensity() {
    DisplayMetrics displayMetrics = getResources().getDisplayMetrics();
    Log.d(TAG,"Density is "+displayMetrics.density+" densityDpi is "+displayMetrics.densityDpi+" height: "+displayMetrics.heightPixels+
        " width: "+displayMetrics.widthPixels);
}
```

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

#### 代码检测终端特性

```java
// 判断客户终端是否具有指南针功能
PackageManager pm = getPackageManager();
if (!pm.hasSystemFeature(PackageManager.FEATURE_SENSOR_COMPASS)) {
    // This device does not have a compass, turn off the compass feature
    disableCompassFeature();
}
```

#### Intent的基本使用

https://developer.android.com/guide/components/intents-common.html

#### 重要的类

* JobScheduler

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

#### 使用系统权限

https://developer.android.com/training/permissions/index.html

https://developer.android.com/guide/topics/security/permissions.html

#### Realm

面向对象的数据库系统

https://realm.io/cn/

#### Android Compatibility Program

https://source.android.com/compatibility

#### API Level

https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels

#### Java8特性

https://developer.android.com/studio/write/java8-support.html

#### Android NDK

https://developer.android.com/ndk/index.html

