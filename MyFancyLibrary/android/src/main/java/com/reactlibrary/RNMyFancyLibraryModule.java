
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import com.tarek360.instacapture.Instacapture;
import com.tarek360.instacapture.listener.SimpleScreenCapturingListener;
import android.graphics.Bitmap;
import java.io.ByteArrayOutputStream;
import android.util.Base64;

public class RNMyFancyLibraryModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNMyFancyLibraryModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNMyFancyLibraryModule";
  }

  @ReactMethod
  public void takeScreenShot(final Callback callback) {
      Instacapture.INSTANCE.capture(getCurrentActivity(), new SimpleScreenCapturingListener() {
        @Override
        public void onCaptureComplete(Bitmap bitmap) {
          ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
          bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
          byte[] byteArray = byteArrayOutputStream .toByteArray();
           String encoded = Base64.encodeToString(byteArray, Base64.DEFAULT);
          callback.invoke(encoded);
        }
      });
  }
}