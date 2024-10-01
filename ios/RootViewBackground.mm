#import "RootViewBackground.h"

@implementation RootViewBackground
RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(setBackground:(double)r g:(double)g b:(double)b a:(double)a)
{
  dispatch_async( dispatch_get_main_queue(), ^{
    UIColor *color = [[UIColor alloc] initWithRed:r/255 green:g/255 blue:b/255 alpha:a/255];
    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    rootViewController.view.backgroundColor = color;
  });
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeRootViewBackgroundSpecJSI>(params);
}
#endif

@end
