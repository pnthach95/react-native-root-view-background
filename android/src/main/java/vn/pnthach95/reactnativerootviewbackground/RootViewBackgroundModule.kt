package vn.pnthach95.reactnativerootviewbackground

import android.app.Activity
import android.graphics.Color
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RootViewBackgroundModule.NAME)
class RootViewBackgroundModule(reactContext: ReactApplicationContext) :
  NativeRootViewBackgroundSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun setBackground(r: Double, g: Double, b: Double, a: Double) {
    val activity: Activity = currentActivity ?: return;
    activity.runOnUiThread(Runnable {
      val rootView = activity.window.decorView;
      val parsedColor = Color.argb(a.toInt(), r.toInt(), g.toInt(), b.toInt());
      rootView.rootView.setBackgroundColor(parsedColor);
    })
  }

  companion object {
    const val NAME = "RootViewBackground"
  }
}
