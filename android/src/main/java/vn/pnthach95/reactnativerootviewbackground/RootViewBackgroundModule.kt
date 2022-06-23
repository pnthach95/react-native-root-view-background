package vn.pnthach95.reactnativerootviewbackground

import android.app.Activity
import android.graphics.Color
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RootViewBackgroundModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "RootViewBackground"
  }

  @ReactMethod
  fun setBackground(color: String) {
    val activity: Activity = currentActivity ?: return;
    activity.runOnUiThread(Runnable {
      val rootView = activity.window.decorView;
      val parsedColor = Color.parseColor(color);
      rootView.rootView.setBackgroundColor(parsedColor);
    })
  }
}
