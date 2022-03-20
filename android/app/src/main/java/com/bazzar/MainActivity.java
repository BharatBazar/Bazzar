package com.bazzar;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate; // <- add this necessary import for react-native-bootsplash
import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import for react-native-bootsplash


// Added this for enabling react navigation support
import android.os.Bundle;
//

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Bazzar";
  }

  /**
   * Added this for enabling @react-navigation support
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  /**
   * Added this for enabling react-native-bootsplash
   */
   @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {

      @Override
      protected void loadApp(String appKey) {
        RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
        super.loadApp(appKey);
      }
    };
  }

}
