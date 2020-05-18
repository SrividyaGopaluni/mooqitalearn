Template.code_compiler.events
	"click #code": () ->
		#alert(test.value)
		Meteor.call "execute_code",test.value,
			(err, res) ->
				if err
					#alert(err)
					sAlert.error("Code compiler error: " + test.value)
				if res
					#console.log("code compiler" + res.content.output)
					output.value = JSON.parse(res.content).output
					#alert(res)


