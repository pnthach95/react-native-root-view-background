#import "RootViewBackground.h"

@implementation RootViewBackground
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

- (void)setBackground:(double)r g:(double)g b:(double)b a:(double)a
{
  dispatch_async( dispatch_get_main_queue(), ^{
    UIColor *color = [[UIColor alloc] initWithRed:r/255 green:g/255 blue:b/255 alpha:a/255];
    UIWindow *keyWindow = nil;
    if ([[UIApplication sharedApplication].delegate respondsToSelector:@selector(window)] &&
        [UIApplication sharedApplication].delegate.window != nil) {
      keyWindow = [UIApplication sharedApplication].delegate.window;
    } else {
      for (UIWindowScene *scene in [UIApplication sharedApplication].connectedScenes) {
        if (scene.activationState == UISceneActivationStateForegroundActive) {
          for (UIWindow *window in scene.windows) {
            if (window.isKeyWindow) {
              keyWindow = window;
              break;
            }
          }
        }
        if (keyWindow) break;
      }
    }
    UIViewController *rootViewController = keyWindow.rootViewController;
    rootViewController.view.backgroundColor = color;
  });
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRootViewBackgroundSpecJSI>(params);
}

+ (NSString *)moduleName
{
  return @"RootViewBackground";
}

@end
