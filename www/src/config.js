// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "71gfume0flncv5ko5kau7blva0",     // CognitoClientID
  "api_base_url": "https://am7uw6fv84.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytoapp1-serverlessdemo2.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1s7ypa0z0ejfz.amplifyapp.com"                                      // AmplifyURL
};

export default config;
