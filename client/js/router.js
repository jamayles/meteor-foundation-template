Router.onAfterAction(function(){
    $(document).foundation();
});

Router.route(
	'/',
	{
		name: 'HomePage',
		title: 'Foundation Template | Marketing',
		metaNames:
		{
			viewport: 'width=device-width, initial-scale=1.0',
			description: 'Documentation and reference library for ZURB Foundation. JavaScript, CSS, components, grid and more.',
			author: 'ZURB, inc. ZURB network also includes zurb.com',
			copyright: 'ZURB, inc. Copyright (c) 2015'
		},
		layoutTemplate: 'MainLayout',
		template: 'HomePage'
	}
);